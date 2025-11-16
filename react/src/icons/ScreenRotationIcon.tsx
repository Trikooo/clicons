import React from 'react';
import config from '../config';

interface ScreenRotationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ScreenRotationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/screen-rotation)
 * @see {@link https://clicons.dev/icon/screen-rotation}
 */
const ScreenRotationIcon = React.forwardRef<SVGSVGElement, ScreenRotationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 12C2.13134 15.1935 4.1976 21.442 11.2999 21.9778C11.718 22.0094 11.9271 22.0251 11.987 21.8984C12.047 21.7717 11.8959 21.6247 11.5937 21.3308L10.2375 20.0117'
    }
  ],
  [
    'path',
    {
      d: 'M22 12.0001C21.8687 8.80658 19.8024 2.55807 12.7001 2.02225C12.282 1.99071 12.0729 1.97494 12.013 2.10167C11.953 2.2284 12.1041 2.37535 12.4063 2.66926L13.7625 3.98835'
    }
  ],
  [
    'path',
    {
      d: 'M8.07586 13.4458C6.71281 12.0827 6.03128 11.4012 6.00104 10.5846C5.97079 9.76793 6.60363 9.13508 7.86933 7.86939C9.13502 6.6037 9.76786 5.97085 10.5845 6.0011C11.4012 6.03134 12.0827 6.71287 13.4457 8.07592L15.9241 10.5543C17.2872 11.9174 17.9687 12.5989 17.999 13.4156C18.0292 14.2322 17.3964 14.865 16.1307 16.1307C14.865 17.3964 14.2321 18.0293 13.4155 17.999C12.5988 17.9688 11.9173 17.2873 10.5543 15.9242L8.07586 13.4458Z'
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

ScreenRotationIcon.displayName = 'ScreenRotationIcon';
export default ScreenRotationIcon;
