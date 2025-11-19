import React from 'react';
import config from '../config';

interface FlashOffIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name FlashOffIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/flash-off)
 * @see {@link https://clicons.dev/icon/flash-off}
 */
const FlashOffIcon = React.forwardRef<SVGSVGElement, FlashOffIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 16L11.6667 21.6535C11.1282 22.356 10.1188 21.9188 10.1188 20.9829V14.0301C10.1188 13.4695 9.72302 13.015 9.23474 13.015H5.88582C5.12506 13.015 4.71954 11.9851 5.22212 11.3294L7.7741 8'
    }
  ],
  [
    'path',
    {
      d: 'M10 5.72714L12.4969 2.35038C13.0221 1.63999 14.0067 2.08215 14.0067 3.02843V10.059C14.0067 10.6258 14.3928 11.0854 14.8691 11.0854H18.1359C18.878 11.0854 19.2736 12.1268 18.7833 12.7898L17.8885 14'
    }
  ],
  [
    'path',
    {
      d: 'M2 2L22 22'
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

FlashOffIcon.displayName = 'FlashOffIcon';
export default FlashOffIcon;
