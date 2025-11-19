import React from 'react';
import config from '../config';

interface Tag2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Tag2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tag2)
 * @see {@link https://clicons.dev/icon/tag2}
 */
const Tag2Icon = React.forwardRef<SVGSVGElement, Tag2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2.73552 11.6867C1.78253 12.7511 1.76203 14.3569 2.63665 15.4865C4.37226 17.7281 6.2719 19.6277 8.51351 21.3633C9.64313 22.238 11.2489 22.2175 12.3133 21.2645C15.203 18.6771 17.8494 15.9731 20.4033 13.0016C20.6558 12.7078 20.8137 12.3477 20.8492 11.9619C21.0059 10.2561 21.3279 5.34144 19.9932 4.00675C18.6586 2.67207 13.7439 2.99408 12.0381 3.15083C11.6523 3.18627 11.2922 3.34421 10.9984 3.59671C8.02692 6.15064 5.32291 8.797 2.73552 11.6867Z'
    }
  ],
  [
    'path',
    {
      d: 'M7.5 14.5L9.5 16.5'
    }
  ],
  [
    'path',
    {
      d: 'M18 6L22 2'
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

Tag2Icon.displayName = 'Tag2Icon';
export default Tag2Icon;
