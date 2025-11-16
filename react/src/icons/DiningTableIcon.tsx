import React from 'react';
import config from '../config';

interface DiningTableIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DiningTableIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dining-table)
 * @see {@link https://clicons.dev/icon/dining-table}
 */
const DiningTableIcon = React.forwardRef<SVGSVGElement, DiningTableIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21 4L20.496 4.96113C19.8115 6.2666 18.8831 7 17.9151 7H7.0849C6.11686 7 5.18847 6.2666 4.50396 4.96113L4 4'
    }
  ],
  [
    'path',
    {
      d: 'M2 4H22'
    }
  ],
  [
    'path',
    {
      d: 'M5 20H5.86863C6.16649 20 6.31542 20 6.4578 19.9794C6.78821 19.9316 7.10141 19.8019 7.36884 19.602C7.48407 19.5159 7.58938 19.4106 7.8 19.2C8.11593 18.8841 8.2739 18.7261 8.44674 18.5969C8.84788 18.2971 9.31768 18.1025 9.81331 18.0309C10.0269 18 10.2503 18 10.6971 18H13.3029C13.7497 18 13.9731 18 14.1867 18.0309C14.6823 18.1025 15.1521 18.2971 15.5533 18.5969C15.7261 18.7261 15.8841 18.8841 16.2 19.2C16.4106 19.4106 16.5159 19.5159 16.6312 19.602C16.8986 19.8019 17.2118 19.9316 17.5422 19.9794C17.6846 20 17.8335 20 18.1314 20H19'
    }
  ],
  [
    'path',
    {
      d: 'M10 18L10.2058 16.9709C10.333 16.3348 10.3967 16.0167 10.5999 15.8059C10.6541 15.7497 10.7147 15.7001 10.7804 15.658C11.027 15.5 11.3513 15.5 12 15.5C12.6487 15.5 12.973 15.5 13.2196 15.658C13.2853 15.7001 13.3459 15.7497 13.4001 15.8059C13.6033 16.0167 13.667 16.3348 13.7942 16.9709L14 18'
    }
  ],
  [
    'path',
    {
      d: 'M10 7L10.2058 8.02913C10.333 8.66523 10.3967 8.98327 10.5999 9.19409C10.6541 9.25028 10.7147 9.29993 10.7804 9.34203C11.027 9.5 11.3513 9.5 12 9.5C12.6487 9.5 12.973 9.5 13.2196 9.34203C13.2853 9.29993 13.3459 9.25028 13.4001 9.19409C13.6033 8.98327 13.667 8.66523 13.7942 8.02913L14 7'
    }
  ],
  [
    'path',
    {
      d: 'M12 15.5L12 9.5'
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

DiningTableIcon.displayName = 'DiningTableIcon';
export default DiningTableIcon;
