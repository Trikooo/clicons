import React from 'react';
import config from '../config';

interface BowlingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BowlingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/bowling)
 * @see {@link https://clicons.dev/icon/bowling}
 */
const BowlingIcon = React.forwardRef<SVGSVGElement, BowlingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.5638 6.56062L10.1822 4.45142C9.95278 3.18322 10.8302 2 12 2C13.1698 2 14.0472 3.18322 13.8178 4.45142L13.4362 6.56062C12.8624 9.73293 14.4246 11.6357 15.5111 14.2704C15.9844 15.4182 16.1184 16.7017 15.8941 17.9385C15.702 18.998 15.3996 20.6686 14.7603 21.4829C14.3324 22.0281 13.7247 21.9997 13.1202 21.9997H10.8798C10.2753 21.9997 9.66764 22.0281 9.2397 21.4829C8.60041 20.6686 8.29796 18.998 8.10586 17.9385C7.88161 16.7017 8.01565 15.4182 8.48894 14.2704C9.57541 11.6357 11.1376 9.73293 10.5638 6.56062Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 8H13'
    }
  ],
  [
    'path',
    {
      d: 'M18 19.9998H19.2945C19.8625 19.9998 20.4333 20.0225 20.8354 19.5863C21.4354 18.9354 21.7196 17.6008 21.9001 16.7531L21.9005 16.7508C22.1112 15.7614 21.9853 14.7346 21.5407 13.8164C20.52 11.7085 19.0523 10.1863 19.5914 7.64849L19.9499 5.96114C20.1654 4.94657 19.3412 4 18.2422 4C17.1432 4 16.3189 4.94657 16.5344 5.96114L16.8929 7.64849C17.0992 8.6198 17.0116 9.44233 16.7676 10.2059M16.9677 9.33333H19.5176'
    }
  ],
  [
    'path',
    {
      d: 'M6 19.9998H4.70545C4.13752 19.9998 3.56668 20.0225 3.16465 19.5863C2.56461 18.9354 2.28044 17.6008 2.09994 16.7531L2.09945 16.7508C1.88877 15.7614 2.0147 14.7346 2.45934 13.8164C3.48003 11.7085 4.94769 10.1863 4.40855 7.64849L4.05009 5.96114C3.83456 4.94657 4.65883 4 5.75784 4C6.85685 4 7.68112 4.94657 7.46559 5.96114L7.10713 7.64849C6.90078 8.6198 6.98839 9.44233 7.2324 10.2059M7.03228 9.33333H4.48242'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

BowlingIcon.displayName = 'BowlingIcon';
export default BowlingIcon;
