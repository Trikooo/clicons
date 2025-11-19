import React from 'react';
import config from '../config';

interface ChartRadarIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChartRadarIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chart-radar)
 * @see {@link https://clicons.dev/icon/chart-radar}
 */
const ChartRadarIcon = React.forwardRef<SVGSVGElement, ChartRadarIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.47817 4.45277C9.65285 2.81759 10.7402 2 12 2C13.2598 2 14.3471 2.81759 16.5218 4.45277L18.5122 5.94933C20.5086 7.45049 21.5068 8.20106 21.8632 9.29857C22.2196 10.3961 21.8488 11.5774 21.107 13.94L20.1987 16.833C19.4169 19.3234 19.0259 20.5685 18.0401 21.2843C17.0543 22 15.7302 22 13.082 22H10.918C8.2698 22 6.94571 22 5.95989 21.2843C4.97406 20.5685 4.58314 19.3234 3.80129 16.833L2.89299 13.94C2.15124 11.5774 1.78037 10.3961 2.13677 9.29857C2.49317 8.20106 3.49139 7.45049 5.48783 5.94933L7.47817 4.45277Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.1165 9.82727C11.0309 9.26108 11.4882 8.97799 11.9906 9.00134C12.4929 9.02468 12.9214 9.34894 13.7783 9.99745L14.4662 10.518C15.3519 11.1883 15.7948 11.5235 15.946 12.0138C16.0972 12.5041 15.9189 13.0272 15.5625 14.0734L15.3544 14.6843C15.0321 15.6303 14.8709 16.1034 14.5002 16.3959C14.1295 16.6885 13.6281 16.7385 12.6253 16.8384L12.0522 16.8955C10.7626 17.024 10.1178 17.0882 9.63256 16.7595C9.14736 16.4308 8.9739 15.8122 8.62699 14.5751L8.35683 13.6117C8.04673 12.5058 7.89168 11.9529 8.08546 11.4588C8.27924 10.9648 8.77048 10.6607 9.75295 10.0524L10.1165 9.82727Z'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 9.5L8 11.5'
    }
  ],
  [
    'path',
    {
      d: 'M14.5 16.5L18 21'
    }
  ],
  [
    'path',
    {
      d: 'M16 12L21.5 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M6.5 21L9 16.5'
    }
  ],
  [
    'path',
    {
      d: 'M12 9V2'
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

ChartRadarIcon.displayName = 'ChartRadarIcon';
export default ChartRadarIcon;
