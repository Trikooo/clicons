import React from 'react';
import config from '../config';

interface ParaglidingIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ParaglidingIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/paragliding)
 * @see {@link https://clicons.dev/icon/paragliding}
 */
const ParaglidingIcon = React.forwardRef<SVGSVGElement, ParaglidingIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.7586 11.213C12.2725 11.0137 11.7275 11.0137 11.2413 11.213L2.00402 15C2.00402 14.0305 1.92087 13.0354 2.51085 12.1986C4.55645 9.29747 8.40267 5.19677 11.0772 3.29756C11.636 2.90081 12.364 2.90081 12.9228 3.29756C15.5973 5.19677 19.4436 9.29747 21.4892 12.1986C22.0791 13.0354 21.996 14.0305 21.996 15L12.7586 11.213Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.028 12C9.60981 13.1195 7.27437 17.1832 8.22598 18.2889C8.94881 19.1288 14.8699 19.3394 15.774 18.2889C16.7256 17.1832 14.3902 13.1195 13.972 12'
    }
  ],
  [
    'path',
    {
      d: 'M12 19V21'
    }
  ],
  [
    'path',
    {
      d: 'M8 17L4.5 14M16 17L19.5 14'
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

ParaglidingIcon.displayName = 'ParaglidingIcon';
export default ParaglidingIcon;
